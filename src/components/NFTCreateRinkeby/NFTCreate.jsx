import InputForm from "./components/InputForm";
import Text from "antd/lib/typography/Text";
import { Card } from "antd";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};


function NFTCreate() {
  return (
    <Card
      style={styles.card}
      title={
        <div style={styles.header}>
          <h1>Create Rinkeby NFT</h1>
          <Text strong>[ ! Select ETH-Rinkeby testnet ! ]</Text>
        </div>
      }
    >
      <InputForm />
    </Card>
  );
}

export default NFTCreate;
