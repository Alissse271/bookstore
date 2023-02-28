import { FC } from "react";
import { Container, StyledFormTabs, StyledButton } from "./styles";

interface FormTabsProps {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
}

export const FormTabs: FC<FormTabsProps> = ({ tabs = [], selectedTab = 0, onClick }) => {
  const Panel = tabs && tabs.find(({ index }) => index === selectedTab);
  return (
    <Container>
      <StyledFormTabs role="tablist">
        {tabs.map(({ index, label }) => (
          <StyledButton
            isActive={selectedTab === index}
            key={index}
            type="button"
            onClick={() => {
              onClick(index);
            }}
          >
            {label}
          </StyledButton>
        ))}
      </StyledFormTabs>
      <div role="tabpanel">{Panel && <Panel.Component index={selectedTab} />}</div>
    </Container>
  );
};
