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
  src,
  heightImage,
  widthImage,
  excavate,
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  // to be edited: imageSettings
  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <QRCodeSVG value={name}
      imageSettings={{
        src: `${src}`,
        x: undefined,
        y: undefined,
        height: heightImage,
        width: widthImage,
        excavate: excavate,
      }}
      level={level} fgColor={QrfgColor} bgColor={QrbgColor} size={Qrsize} includeMargin={includeMargin} />
    </div>
  );
};

export default QrCode;
