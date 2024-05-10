import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
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
  evacate,
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState(() => name);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<string>();
      setValue(v || name);
    };

    listener();

    console.log(value);
    console.log(level);

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <QRCodeSVG value={name}
      imageSettings={{
        src: `${src}`,
        x: undefined,
        y: undefined,
        height: heightImage,
        width: widthImage,
        excavate: evacate,
      }}
      level={level} fgColor={QrfgColor} bgColor={QrbgColor} size={Qrsize} includeMargin={includeMargin}/>
    </div>
  );
};

export default QrCode;
