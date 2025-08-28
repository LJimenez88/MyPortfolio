import React from "react";
import { Modal } from "react-bootstrap";

function VideoModal({ show, onHide, videoUrl }) {
  const isEmbed = videoUrl.includes("youtube.com") || videoUrl.includes("vimeo.com");

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body style={{ padding: 0, textAlign: "center" }}>
        {isEmbed ? (
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={videoUrl}
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
          </div>
        ) : (
          <video controls style={{ width: "100%", height: "auto" }}>
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl} type="video/quicktime" /> {/* for .mov */}
            Your browser does not support the video tag.
          </video>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default VideoModal;
