import styled from "styled-components";

export const Indent = styled.span`
  padding-left: 20px;
  font-size: 14px;
  color: #35393f;
  font-family: Roboto Mono;
`;
export const HeadingContainer = styled.div`
  height: 42px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const Container = styled.div<{full?: boolean}>`
  padding: 24px;
  ${(props) => props.full && "width: 100%;"}
`;
export const Accordance = styled.div<{ bordered?: boolean }>`
  width: 100%;
  background: #f5f5f5;
  border-radius: 3px;
  overflow: hidden;
  ${(props) => props.bordered && "border-left: #E46643 solid 4px;"}
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainContainer = styled.div`
  width: 100%;
  border-left: #e4e4e4 1px solid;
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

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

export const SideBarBox = styled.div`
  min-width: 250px;
  max-height: 100vh;
  background: #1d1f22;
  display: flex;
`;

export const JustifyBetween = styled.div<{direction?: string, full?: boolean}>`
display: flex;
justify-content: space-between;
justify-items: center;
${(props) => props.direction && `flex-direction: ${props.direction};`}
${(props) => props.full && `height: 100%;`}
`

export const Pointer = styled.div`
cursor: pointer;
`
export const HidePreviewContainer = styled.div`
  width: 672px;
  padding-top: 24px;
`
export const HidePreview = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const ToggleBox= styled.div`
display: flex;
gap: 12px;
align-items: center;
flex-direction: row;
`