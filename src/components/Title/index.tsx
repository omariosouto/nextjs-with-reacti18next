interface TitleProps {
  content: string;
}

export const Title = ({ content }: TitleProps) => {
  return <h1>{content}</h1>;
};
