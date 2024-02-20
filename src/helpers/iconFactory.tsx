import { Icons } from '@/enums';
import { NumpySVG } from '../components/svg/icons/Numpy';
import { ReactSVG } from '../components/svg/icons/React';
import { DockerSVG } from '../components/svg/icons/Docker';
import { PythonSVG } from '../components/svg/icons/Python';
import { HtmlSVG } from '../components/svg/icons/Html';
import { CssSVG } from '../components/svg/icons/Css';
import { MatplotlibSVG } from '../components/svg/icons/Matplotlib';
import { TensorflowSVG } from '../components/svg/icons/Tensorflow';
import { ScikitLearnSVG } from '../components/svg/icons/Scikitlearn';
import { PandasSVG } from '../components/svg/icons/Pandas';
import { TypeScriptSVG } from '../components/svg/icons/TypeScript';
import { JavaScriptSVG } from '../components/svg/icons/JavaScript';
import { FigmaSVG } from '../components/svg/icons/Figma';
import { JavaSVG } from '../components/svg/icons/Java';
import { GithubSVG } from '../components/svg/social/Github';

const {
  NUMPY,
  PANDAS,
  DOCKER,
  JAVA,
  HTML,
  FIGMA,
  CSS,
  PYTHON,
  REACT,
  GITHUB,
  MATPLOTLIB,
  TENSORFLOW,
  SCIKITLEARN,
  TYPESCRIPT,
} = Icons;

export const iconFactory = (type: string) => {
  switch (type) {
    case NUMPY:
      return <NumpySVG />;
    case REACT:
      return <ReactSVG />;
    case DOCKER:
      return <DockerSVG />;
    case PYTHON:
      return <PythonSVG />;
    case HTML:
      return <HtmlSVG />;
    case CSS:
      return <CssSVG />;
    case GITHUB:
      return <GithubSVG />;
    case MATPLOTLIB:
      return <MatplotlibSVG />;
    case TENSORFLOW:
      return <TensorflowSVG />;
    case SCIKITLEARN:
      return <ScikitLearnSVG />;
    case PANDAS:
      return <PandasSVG />;
    case TYPESCRIPT:
      return <TypeScriptSVG />;
    case FIGMA:
      return <FigmaSVG />;
    case JAVA:
      return <JavaSVG />;
    default:
      return <JavaScriptSVG />;
  }
};
export default iconFactory;
