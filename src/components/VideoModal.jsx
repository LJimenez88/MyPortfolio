import React from "react";
import { Modal } from "react-bootstrap";

function getEmbedUrl(url) {
  if (!url) return "";
  
  // Handle short links
  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }

  // Handle watch links
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // Already embed
  return url;
}

function VideoModal({ show, onHide, videoUrl }) {
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body style={{ padding: 0 }}>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          {embedUrl && (
            <iframe
              src={embedUrl}
              title="project-video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}


export default VideoModal;
