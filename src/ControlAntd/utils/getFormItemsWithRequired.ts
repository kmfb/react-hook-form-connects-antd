import { IControlAntdFormItems } from '../../types';

function getFormItemsWithRequired(
  items: IControlAntdFormItems,
  checkedNames: Array<string>,
  mode: 'reverse' | 'normal' = 'normal'
) {
  return items.map((item: any) => {
    const isIn = checkedNames.some((name: string) => item.name.endsWith(name));
    const isNotIn = !isIn;

    const condition = mode === 'reverse' ? isNotIn : isIn;
    if (condition) {
      return {
        ...item,
        rules: {
          ...item.rules,
          required: {
            value: true,
            message: `${item.label}不能为空`,
          },
        },
      };
    }

    return item;
  });
}

export default getFormItemsWithRequired;
