import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import VideoModal from "../VideoModal";

function ProjectCards(props) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>

          {/* Demo link */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {/* Video button */}
          {props.videoLink && (
            <Button variant="danger" onClick={() => setShowVideo(true)}>
              <FaPlay /> &nbsp; Watch Video
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Video modal */}
      {props.videoLink && (
        <VideoModal
          show={showVideo}
          onHide={() => setShowVideo(false)}
          videoUrl={props.videoLink}
        />
      )}
    </>
  );
}

export default ProjectCards;
