import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { IQrCodeProps } from './QrCode.config';

const QrCode: FC<IQrCodeProps> = ({
  name,
  style,
  className,
  classNames = [],
  QrfgColor,
  QrbgColor,
  Qrsize,
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  console.log(Qrsize);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <QRCodeSVG value={name} fgColor={QrfgColor} bgColor={QrbgColor} size={Qrsize} />
    </div>
  );
};

export default QrCode;
