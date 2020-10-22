export class UnitHelper {
  static renderUnit = (type: string): string => {
    switch (type) {
      case 'number':
        return '개';
      case 'count':
        return '회';
      case 'people':
        return '명';
      case 'money':
        return '원';
      case 'percent':
        return '%';
      case 'rank':
        return '위';
      default:
        return '';
    }
  };

  static positiveCheck = (val: number): boolean => {
    return val >= 0;
  };

  static rankText = (val: number): number => {
    return Math.abs(val);
  };

  static rateText = (val: number, symbol = false): string => {
    console.log(val);
    if (val === null) {
      return 'error';
    }

    if (symbol && UnitHelper.positiveCheck(val)) {
      return `+ ${UnitHelper.comma(Math.abs(val))}`;
    }
    return UnitHelper.comma(val);
  };

  static comma = (val: number): string => {
    const values = val.toString().split('.');

    // 소수점을 포함하는 경우
    if (values.length === 2) {
      return `${values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${values[1].toString()}`;
    }

    // 소수점이 없는 경우
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Html Tag 제거
  static planText = (desc: string): string => {
    if (desc) {
      const ret = desc.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      return ret.replace(/(<([^>]+)>)/gi, '');
    }

    return '';
  };
}
