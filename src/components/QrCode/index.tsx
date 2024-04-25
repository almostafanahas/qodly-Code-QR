import config, { IQrCodeProps } from './QrCode.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './QrCode.build';
import Render from './QrCode.render';

const QrCode: T4DComponent<IQrCodeProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

QrCode.craft = config.craft;
QrCode.info = config.info;
QrCode.defaultProps = config.defaultProps;

export default QrCode;
