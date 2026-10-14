import Image from "next/image";
import type { HomeAgent } from "@/types/home";

interface AgentsProps {
  agents: HomeAgent[];
}

export default function Agents({ agents }: AgentsProps) {

  return (
    <div className="section section-5 bg-light">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6 mb-5">
            <h2 className="font-weight-bold heading text-primary mb-4">
              Our Agents
            </h2>

            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim pariatur similique debitis vel nisi qui reprehenderit totam?
              Quod maiores.
            </p>
          </div>
        </div>

        <div className="row">
          {agents.map((agent) => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
              key={agent.title}
            >
              <div className="h-100 person">

                {agent.featuredImage?.node?.sourceUrl && (
                  <Image
                    src={agent.featuredImage.node.sourceUrl}
                    alt={agent.title}
                    width={400}
                    height={400}
                    className="img-fluid"
                    unoptimized
                  />
                )}

                <div className="person-contents">

                  <h2 className="mb-0">
                    <span>{agent.title}</span>
                  </h2>

                  {agent.agentDetails?.designation && (
                    <span className="meta d-block mb-3">
                      {agent.agentDetails.designation}
                    </span>
                  )}

                  {agent.content && (
                    <div dangerouslySetInnerHTML={{ __html: agent.content }} />
                  )}

                  <ul className="social list-unstyled list-inline dark-hover">

                    {agent.agentDetails?.twitterUrl && (
                      <li className="list-inline-item">
                        <a
                          href={agent.agentDetails.twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-twitter" />
                        </a>
                      </li>
                    )}

                    {agent.agentDetails?.facebookUrl && (
                      <li className="list-inline-item">
                        <a
                          href={agent.agentDetails.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-facebook" />
                        </a>
                      </li>
                    )}

                    {agent.agentDetails?.linkedinUrl && (
                      <li className="list-inline-item">
                        <a
                          href={agent.agentDetails.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-linkedin" />
                        </a>
                      </li>
                    )}

                    {agent.agentDetails?.instagramUrl && (
                      <li className="list-inline-item">
                        <a
                          href={agent.agentDetails.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    )}

                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
