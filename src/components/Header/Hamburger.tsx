import styled from "styled-components";

interface HamburgerProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  menuShowing: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, menuShowing }) => {
  return (
    <Wrapper onClick={onClick} menuShowing={menuShowing}>
      <Bar />
    </Wrapper>
  );
};

const Bar = styled.span`
  --bar-width: 1.75rem;
  --bar-height: 2px;
  --bg-color: white;
  --rounded: 8px;
  position: relative;
  display: block;
  border-radius: var(--rounded);
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--bg-color);
  transition: var(--ease-150);

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    border-radius: var(--rounded);
    width: var(--bar-width);
    height: var(--bar-height);
  }

  &::before {
    transition: var(--ease-150);
    background-color: var(--bg-color);
    top: -0.6rem;
  }

  &::after {
    transition: var(--ease-150);
    background-color: var(--bg-color);
    top: 0.6rem;
  }
`;

const Wrapper = styled.button<HamburgerProps>`
  width: 3.5rem;
  height: 3.5rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  overflow: hidden;
  transition: var(--ease-150);

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: #1f1f1f;
  }

  ${Bar} {
    transform: ${(props) => props.menuShowing && "translateX(200%)"};

    &::before {
      transform: ${(props) =>
        props.menuShowing &&
        "translateX(-200%) translateY(0.6rem) rotateZ(45deg)"};
    }

    &::after {
      transform: ${(props) =>
        props.menuShowing &&
        "translateX(-200%) translateY(-0.6rem) rotateZ(-45deg)"};
    }
  }
`;

export default Hamburger;
