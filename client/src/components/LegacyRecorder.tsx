      import { useEffect, useState } from "react";
      import { CheckCircle } from "lucide-react";

      export default function LegacyRecorder() {
        const [showRecorder, setShowRecorder] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [isRecording, setIsRecording] = useState(false);
        const [isFadingOut, setIsFadingOut] = useState(false);
        const [hasMounted, setHasMounted] = useState(false);
        const [showFloatingDownload, setShowFloatingDownload] = useState(false);
        


        useEffect(() => {
          if (!showRecorder) return;

          const webhookUrl =
            "https://rrhighlights.app.n8n.cloud/webhook/3675b383-e96c-478c-a2a9-06782df3c0cc";

          let mediaRecorder: MediaRecorder;
          let audioChunks: BlobPart[] = [];
          let audioBlob: Blob;

          const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
          const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement;
          const audioPlayback = document.getElementById("audioPlayback") as HTMLAudioElement;
          const downloadLink = document.getElementById("downloadLink") as HTMLAnchorElement;
          const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

          if (startBtn && stopBtn && submitBtn) {
            startBtn.onclick = async () => {
              const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
              mediaRecorder = new MediaRecorder(stream);
              audioChunks = [];

              mediaRecorder.ondataavailable = (e) => {
                if (e.data.size) audioChunks.push(e.data);
              };

              mediaRecorder.onstop = () => {
                audioBlob = new Blob(audioChunks, { type: "audio/webm" });
                const url = URL.createObjectURL(audioBlob);
                audioPlayback.src = url;
                downloadLink.href = url;
                downloadLink.style.display = "inline-block";
                submitBtn.style.display = "inline-block";
              };

              mediaRecorder.start();
              setIsRecording(true);
              startBtn.disabled = true;
              stopBtn.disabled = false;
            };

            stopBtn.onclick = () => {
              mediaRecorder.stop();
              setIsRecording(false);
              startBtn.disabled = false;
              stopBtn.disabled = true;
            };

            submitBtn.onclick = async () => {
              const fd = new FormData();
              fd.append("file", audioBlob, "recording.webm");

              setIsSubmitting(true);
              setIsSubmitted(false);

              try {
                const res = await fetch(webhookUrl, {
                  method: "POST",
                  body: fd,
                });

                if (res.ok) {
                  setIsSubmitted(true);

                  setTimeout(() => {
                    setIsSubmitted(false);
                    if (!isRecording) {
                      requestAnimationFrame(() => {
                        setIsFadingOut(true);
                        setTimeout(() => {
                          setShowRecorder(false);
                          setIsFadingOut(false);
                        setShowFloatingDownload(true);
                        }, 800);
                      });
                    }
                  }, 4000);
                } else {
                  alert("❌ Failed to send to n8n.");
                }
              } catch (err) {
                console.error(err);
                alert("❌ Network or server error.");
              } finally {
                setIsSubmitting(false);
              }
            };
          }
        }, [showRecorder]);
return (
  <div className="text-center my-16">
    {/* Demo Button */}
    {!showRecorder && (
      <div className="flex justify-center items-center gap-4 mb-10 transition-opacity duration-700 ease-in-out opacity-100">
        <button
          onClick={() => {
            setHasMounted(true);
            setShowRecorder(true);
          }}
          onMouseMove={(e) => {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            target.style.setProperty("--x", `${x}px`);
            target.style.setProperty("--y", `${y}px`);
          }}
          className="relative group px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 text-white overflow-hidden glow-border"
          style={{
            background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), #4f46e5, #0ea5e9)",
          }}
        >
          <span className="relative z-10">🚀 Try the Demo</span>
          <span className="absolute inset-0 bg-gradient-to-r from-electric-500 to-neon-500 opacity-50 group-hover:opacity-80 transition duration-300 blur-lg mix-blend-screen pointer-events-none" />
        </button>
      </div>
    )}
    {/* Recorder */}
    {showRecorder && hasMounted && (
      <div
        className={`transition-opacity duration-700 ease-in-out animate-fade-slide-up ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">🎙️ Voice-to-CRM in Action</h2>
          <p className="text-gray-400 mb-6">
            Record a quick voice message to test the full pipeline.
          </p>
          <button id="startBtn" className="bg-green-600 text-white px-6 py-2 rounded-md m-2">
            Start Recording
          </button>
          <button id="stopBtn" className="bg-red-600 text-white px-6 py-2 rounded-md m-2" disabled>
            Stop Recording
          </button>
          <br />
          <audio id="audioPlayback" controls className="mx-auto mt-4" />
          <br />
          <a
            id="downloadLink"
            style={{ display: "none" }}
            download="recording.webm"
            className="text-blue-400 underline"
          >
            Download Recording
          </a>
          <br />
          <button
            id="submitBtn"
            style={{ display: "none" }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md m-2"
          >
            Submit to n8n
          </button>
          {isRecording && (
            <p className="text-neon-500 mt-3 animate-pulse font-semibold">🎧 Recording…</p>
          )}
          {isSubmitting && (
            <p className="text-sm text-gray-400 mt-2 animate-pulse">Sending to n8n...</p>
          )}
          {isSubmitted && (
            <div className="mt-4 text-green-400 flex items-center justify-center gap-2 animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              <span>Sent to n8n successfully!</span>
            </div>
          )}
        </div>
      </div>
    )}
    {/* Floating Download Icon */}
    {showFloatingDownload && (
    <div className="flex justify-center mt-6 animate-fade-in">
      <a
        href="#"
        id="floatingDownload"
        download="recording.webm"
        className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition text-2xl"
        title="Download Recording"
      >
        📥
      </a>
    </div>
    )}
  </div>
);
}