import styled from "styled-components";

const design = {
  bodyMed: {
    "font-weight": 300,
    "font-size": "13px",
    "font-family": "Roboto",
  },
  headingMed: {
    "font-size": "15px",
    "font-family": "Roboto",
  },
  markdown: {
    "font-family": "Roboto Mono",
    "font-size": "14px",
    color: "#35393F",
    "line-height": "24px",
  },
  headingSmall: {
    "font-size": "14px",
    "font-weight": 500,
    color: "#7C8187",
    "letter-spacing": "2px",
    "font-family": "Roboto",
  },
  previewH1: {
    "font-size": "32px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
    "line-height": "32px",
  },
  previewH2: {
    "font-size": "28px",
    "font-weight": 300,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH3: {
    "font-size": "24px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH4: {
    "font-size": "20px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH5: {
    "font-size": "16px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
  previewH6: {
    "font-size": "14px",
    "font-weight": 700,
    color: "#E46643",
    "font-family": "Roboto Slab",
  },
  previewPara: {
    "font-size": "14px",
    color: "#7C8187",
    "font-family": "Roboto Slab",
  },
  previewParaBold: {
    "font-size": "14px",
    "font-weight": 700,
    color: "#35393F",
    "font-family": "Roboto Slab",
  },
};

export const Text = styled.p<{
  color?: string;
  fontStyle?: keyof typeof design;
  mode?: "light" | "dark";
}>`
  color: ${(props) => {
    if (props.color === "primary") {
      return "#7C8187";
    } else {
      return "#fff";
    }
  }};
  line-height: 24px;
  ${(props) => {
    const designObj = props.fontStyle ? design[props.fontStyle] : {};
    return Object.entries(designObj)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
  }};
  color: ${(props) => {
    if (props.mode === "dark") {
      return "#fff";
    }
  }} !important;
  /* flex-grow: 1; */
`;

export const Button = styled.div<{ width?: string }>`
  display: inline-flex;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  user-select: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background-color: #e46643;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1rem;
  gap: 8px;
  text-decoration-line: none;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    background-color: #f39765;
  }
`;

export const Indent = styled.span`
  padding-left: 20px;
  font-size: 14px;
  color: #35393f;
  font-family: Roboto Mono;
`;
export const HeadingContainer = styled.div<{ mode?: "light" | "dark" }>`
  height: 42px;
  background: ${(props) => {
    if (props.mode === "dark") {
      return "#1D1F22";
    } else {
      return "#f5f5f5";
    }
  }};
  display: flex;
  align-items: center;
  /* width: 100%; */
`;

export const Container = styled.div<{ width?: string }>`
  padding: 24px;
  overflow-x: hidden;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};

  @media (max-width: 425px) {
    padding: 20px;
  }
`;
// export const Accordance = styled.div<{ bordered?: string, mode?: 'light' | 'dark' }>`
//   width: 100%;
//   background: #f5f5f5;
//   border-radius: 3px;
//   overflow: hidden;
//   ${(props) => props.bordered === 'true' && `border-left: ${props.mode === 'dark' ? '#5A6069':'#E4E4E4'} solid 4px;`}
// `;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainContainer = styled.div<{
  $bordered?: string;
  mode?: "light" | "dark";
  $hidePreview?: boolean;
}>`
  /* height: 100vh; */
  width: ${(props) => (props.$hidePreview ? "100vw" : "50vw")};
  ${(props) =>
    props.$bordered === "true" &&
    `border-left: ${props.mode === "dark" ? "#5A6069" : "#E4E4E4"} solid 1px;`}

  @media (max-width: 593px) {
    width: 100vw;
    height: auto;
  }
`;

export const PreviewContainer = styled.div<{ $hidePreview?: boolean }>`
  @media (max-width: 593px) {
    display: ${(props) => !props.$hidePreview && "none"};
  }
`;
export const MarkdownContainer = styled.div<{ $hidePreview?: boolean }>`
  @media (max-width: 593px) {
    display: ${(props) => !props.$hidePreview && "none"};
  }
`;

export const Shadow = styled.span`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UnList = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const OrList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

export const Bullet = styled.div`
  background: #e46643;
  width: 3px;
  min-width: 3px;
  height: 3px;
  border-radius: 50%;
  margin-top: 10px;
  display: inline-block;
`;
export const Highlight = styled.span`
  color: #35393f;
  font-family: "Roboto Mono";
`;

export const Flex = styled.div<{ mode?: "light" | "dark" }>`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  max-height: 100vh;
  height: 100vh;
  overflow-y: hidden;
  ${(props) =>
    props.mode === "dark" &&
    `
    background: #151619;
  `}
`;

export const PreviewBox = styled.div<{ $mode?: "light" | "dark" }>`
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#5393F")};
    font-family: "Roboto Slab";
    line-height: 32px;
  }

  & > * {
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: #7c8187;
    font-family: "Roboto Slab";
    line-height: 24px;
  }

  h2 {
    font-size: 28px;
    font-weight: 300;
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
    font-family: "Roboto Slab";
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
    font-family: "Roboto Slab";
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
    font-family: "Roboto Slab";
  }

  h5 {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
    font-family: "Roboto Slab";
  }

  h5 {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
    font-family: "Roboto Slab";
  }

  h6 {
    font-size: 14px;
    font-weight: 700;
    color: #e46643;
    font-family: "Roboto Slab";
  }

  ol {
    padding-left: 38px;
  }

  ol li {
    font-size: 14px;
    color: #7c8187;
    font-family: "Roboto Slab";
    margin-bottom: 4px;
    /* margin-left: 38px; */
  }

  ol li::before {
    margin-right: 16rem;
  }

  ul li {
    padding-left: 0;
    display: flex;
    flex-direction: row;
  }

  ul li {
    font-size: 14px;
    color: #7c8187;
    font-family: "Roboto Slab";
    list-style: none;
    margin-bottom: 4px;
  }

  ul li::before {
    content: "•";
    color: #e46643;
    font-family: "Roboto Slab";
    font-size: 14px;
    margin-right: 16px;
    margin-left: 24px;
    display: inline-block;
    /* width: 2px; */
    text-align: center;
    vertical-align: middle;
  }

  blockquote {
    width: 100%;
    background: ${(props) => (props.$mode === "dark" ? "#2B2D31" : " #f5f5f5")};
    border-radius: 4px;
    overflow: hidden;
    border-left: #e46643 solid 4px;
    padding: 24px;
    font-size: 14px;
    font-weight: 700;
    font-family: Roboto Slab;
  }

  blockquote a,
  blockquote p {
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
  }

  code {
    color: ${(props) => (props.$mode === "dark" ? "#fff" : "#35393F")};
    font-family: Roboto Mono;
    line-height: 24px;
    font-size: 14px;
    white-space: pre-wrap;
  }

  pre {
    width: 100%;
    background: ${(props) => (props.$mode === "dark" ? "#2B2D31" : " #f5f5f5")};
    border-radius: 4px;
    overflow: hidden;
    padding: 24px;
  }
`;

export const JustifyBetween = styled.div<{
  direction?: string;
  height?: string;
  width?: string;
}>`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  height: ${(props) => {
    if (props.height) {
      return props.height;
    }
  }};
  width: ${(props) => {
    if (props.width) {
      return props.width;
    }
  }};
  ${(props) => props.direction && `flex-direction: ${props.direction};`}
`;

export const Pointer = styled.div`
  cursor: pointer;
`;
export const HidePreviewContainer = styled.div`
  width: 672px;
  padding: 24px;

  @media (max-width: 425px) {
    padding: 20px;
    width: 100%;
  }
`;
export const HidePreview = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ToggleBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: row;
`;

export const SVG = styled.svg`
  &:hover {
    fill: #e46643;
  }
`;

export const Editor = styled.textarea<{ $mode?: "light" | "dark" }>`
  white-space: pre-wrap;
  resize: none;
  overflow: auto;
  height: auto;
  width: 100%;
  border: none;
  font-family: Roboto Mono;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  color: ${(props) => (props.$mode === "dark" ? "#C1C4CB" : " #35393f")};
  background: transparent;
`;

export const FileName = styled.input`
  background: transparent;
  border: none;
  height: auto;
  font-family: Roboto;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  outline: none;
  cursor: pointer;
  /* width: 2rem; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 375px) {
    max-width: 5rem;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #fff;
    caret-color: #e46643;
    width: auto;
  }
`;
