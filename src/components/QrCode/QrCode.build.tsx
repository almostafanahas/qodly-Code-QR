import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { IQrCodeProps } from './QrCode.config';

const QrCode: FC<IQrCodeProps> = ({
  name,
  level,
  style,
  className,
  classNames = [],
  QrfgColor,
  QrbgColor,
  Qrsize,
  includeMargin,
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  console.log(Qrsize);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <QRCodeSVG value={name} level={level} fgColor={QrfgColor} bgColor={QrbgColor} size={Qrsize} includeMargin={includeMargin} />
    </div>
  );
};

export default QrCode;
