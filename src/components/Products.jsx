import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./productStyle";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";

const img = "./imgs/logo.png";
const Product = ({ title, date, imgUrl }) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{date} days ago</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
          <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};

//
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  flex-direction: row;
  justify-content: center;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
function Products() {
  return (
    <section className="section" style={{ backgroundColor: "#000" }}>
      <div
        className="col-lg-12 col-12 text-center"
        style={{ paddingBottom: "2rem" }}
      >
        <h2 className="text-white" data-aos="fade-up" data-aos-delay="200">
          Notre Produits
        </h2>
      </div>
      <div className="products container-fluid">
        <CardContainer>
          <Product title={"hello world"} imgUrl={img} />
          <Product title={"My Card"} imgUrl={img} />
          <Product title={"My Card"} imgUrl={img} />
          <Product title={"My Card"} imgUrl={img} />
        </CardContainer>
      </div>
    </section>
  );
}

export default Products;
