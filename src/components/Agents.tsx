import Image from "next/image";
import { fetchGraphQL } from "@/lib/graphql/client";
import { GET_AGENTS } from "@/lib/graphql/queries/agents";

interface Agent {
  id: string;
  databaseId: number;
  name: string;
  description: string | null;
  designation: string | null;
  phone: string | null;

  image: {
    url: string | null;
    altText: string | null;
  } | null;

  twitter: string | null;
  facebook: string | null;
  linkedin: string | null;
  instagram: string | null;
}

interface AgentsResponse {
  agentUsers: Agent[];
}

export default async function Agents() {
  const data = await fetchGraphQL<AgentsResponse>(GET_AGENTS);

  const agents = data.agentUsers;

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
              key={agent.id}
            >
              <div className="h-100 person">

                {agent.image?.url && (
                  <Image
                    src={agent.image.url}
                    alt={agent.image.altText || agent.name}
                    width={400}
                    height={400}
                    className="img-fluid"
                    unoptimized
                  />
                )}

                <div className="person-contents">

                  <h2 className="mb-0">
                    <span>{agent.name}</span>
                  </h2>

                  {agent.designation && (
                    <span className="meta d-block mb-3">
                      {agent.designation}
                    </span>
                  )}

                  {agent.description && (
                    <p>{agent.description}</p>
                  )}

                  <ul className="social list-unstyled list-inline dark-hover">

                    {agent.twitter && (
                      <li className="list-inline-item">
                        <a
                          href={agent.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-twitter" />
                        </a>
                      </li>
                    )}

                    {agent.facebook && (
                      <li className="list-inline-item">
                        <a
                          href={agent.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-facebook" />
                        </a>
                      </li>
                    )}

                    {agent.linkedin && (
                      <li className="list-inline-item">
                        <a
                          href={agent.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon-linkedin" />
                        </a>
                      </li>
                    )}

                    {agent.instagram && (
                      <li className="list-inline-item">
                        <a
                          href={agent.instagram}
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