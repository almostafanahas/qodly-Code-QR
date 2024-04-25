import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
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

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <QRCodeSVG value={value || name} fgColor={QrfgColor} bgColor={QrbgColor} size={Qrsize} />
    </div>
  );
};

export default QrCode;
