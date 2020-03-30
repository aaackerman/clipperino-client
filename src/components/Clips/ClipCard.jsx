import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CLIPS = gql`
  {
    clips {
      title
      embedUrl
      creatorName
    }
  }
`;

const ClipCard = () => {
  const { loading, error, data } = useQuery(CLIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.clips.map(({ title, embedUrl, creatorName }) => (
    <Col xl="6" className="pb-4">
      <Card className="bg-gradient-default shadow">
        <CardHeader className="bg-transparent">
          <Row className="align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-light ls-1 mb-1">
                Clipped by {creatorName}
              </h6>
              <h2 className="mb-0 text-light">{title}</h2>
            </div>
          </Row>
        </CardHeader>
        <CardBody>
          <iframe
            src={`${embedUrl}&autoplay=false`}
            width="100%"
            height="360"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            title={title}
          ></iframe>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default ClipCard;
