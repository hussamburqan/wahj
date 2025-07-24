import { IClient } from "../../types/client";
import classes from "./ClientsSwiper.module.css";

interface IProps {
  clients: IClient[];
}

const ClientsSwiper = ({ clients }: IProps) => {
  if (!clients || clients.length === 0) {
    return null; 
  }

  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <section className={classes.clients}>
      <h2>Our Clients</h2>
      <div className={classes.clientsContainer}>
        <div className={classes.clientsTrack}>
          {extendedClients.map((client, index) => (
            <div key={index} className={classes.clientCard}>
              <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                >
                  <img src={client.logo} alt={client.name} />
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSwiper;