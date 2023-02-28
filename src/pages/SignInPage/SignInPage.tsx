import { useState } from "react";
import { SignUpForm, SignInForm, FormTabs } from "components";
import { Container } from "./styles";
type TabsProps = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

const tabs: TabsProps = [
  { label: "SIGN IN", index: 1, Component: SignInForm },
  { label: "SIGN UP", index: 2, Component: SignUpForm },
];

export const SignInPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <Container>
      <FormTabs tabs={tabs} selectedTab={selectedTab} onClick={setSelectedTab} />
    </Container>
  );
};
