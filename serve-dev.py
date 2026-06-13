import http.server, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
ROOT = os.path.dirname(os.path.abspath(__file__))

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        super().end_headers()
    def log_message(self, format, *args):
        pass  # suppress request logs

print(f"Lockshot dev server on http://127.0.0.1:{PORT}")
http.server.HTTPServer(("127.0.0.1", PORT), NoCacheHandler).serve_forever()
