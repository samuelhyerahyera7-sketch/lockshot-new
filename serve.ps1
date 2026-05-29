$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173
$types = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".json"="application/json"; ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".svg"="image/svg+xml"; ".webp"="image/webp" }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()
Write-Host "Lockshot preview running at http://127.0.0.1:$port"
[Console]::Out.Flush()
while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request; $res = $ctx.Response
        $path = $req.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        $file = Join-Path $root ($path.TrimStart("/").Replace("/", "\"))
        try {
            if (Test-Path $file -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($file).ToLower()
                $ct = if ($types.ContainsKey($ext)) { $types[$ext] } else { "application/octet-stream" }
                $bytes = [System.IO.File]::ReadAllBytes($file)
                $res.ContentType = $ct
                $res.Headers.Add("Cache-Control", "no-store, no-cache, must-revalidate")
                $res.ContentLength64 = $bytes.Length
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $res.StatusCode = 404
                $body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
                $res.ContentLength64 = $body.Length
                $res.OutputStream.Write($body, 0, $body.Length)
            }
        } catch {
            # Swallow per-request errors so the server keeps running
        } finally {
            try { $res.OutputStream.Close() } catch {}
        }
    } catch {
        # Swallow listener errors
    }
}
