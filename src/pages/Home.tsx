import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Container = styled.div`
  max-width: 900px;
  margin: 80px auto 40px; /* account for fixed header */
  padding: 20px;
  font-family: ${({ theme }) => theme.font};
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  margin-bottom: 30px;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: ${({ theme }) =>
    theme.layout === "card"
      ? "#fff4f4"
      : theme.background === "#1e1e1e"
      ? "#222"
      : "#eee"};
  color: ${({ theme }) => theme.color};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  font-family: ${({ theme }) => theme.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Container>
      <Title>Welcome to the Home Page</Title>
      <Paragraph>
        This is a sample paragraph demonstrating theme based styles.
      </Paragraph>
      <Button>Show Now</Button>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductGrid>
          {products.map((p) => (
            <ProductCard key={p.id}>
              <ProductImage src={p.image} alt={p.title} />
              <ProductTitle>{p.title}</ProductTitle>
              <ProductPrice>${p.price.toFixed(2)}</ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      )}
    </Container>
  );
};

export default Home;
