import HomeMain from "../home/home";
import Xclusive from "../xclusive/xclusive";
import PalmaSoft from "../palma-soft/palma-soft";

const Stepper = (props) => {
  switch (props.step) {
    case 1:
      return <HomeMain continueClick={props.firstStep} />;
    case 2:
      return (
        <Xclusive
          backClick={props.initialStep}
          continueClick={props.secondStep}
        />
      );
    case 3:
      return <PalmaSoft />;

    default:
      return <StepOne />;
  }
};

export default Stepper;
