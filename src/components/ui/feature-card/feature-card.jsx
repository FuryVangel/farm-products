import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, Owner, Header, Text } from "./styles";

function FeatureCard({ title, owner, image, about, isNegative }) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

export default FeatureCard;
