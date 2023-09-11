import { Menu, Space, Input, Card } from "antd";

export default function NameCard(props) {
  const { first = '', lastName = '' } = props

  return (
    <Card
          hoverable={true}
          style={{ width: 320 }}
          cover={
            <div
              style={{
                height: 150,
                width: "100%",
                background: "linear-gradient(#e66465, #9198e5)",
                color: "white",
                fontSize: 30,
                paddingTop: 20,
                fontFamily: "cursive",
              }}
            >
              Ant Design Card
            </div>
          }
        >
          <Card.Meta
            title="Here is the first and last name"
          ></Card.Meta>
          <p>This is the content of the card</p>
          {first}
          {lastName}
          {`All together now ${first} ${lastName}`}
        </Card>
  )

}