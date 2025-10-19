import { DialogPart } from './dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogCondition
 */
export class DialogCondition extends DialogPart {
  public conditionType?: string;
  public propertyValue?: string;
  public propertyName?: string;
  public factScope?: string;
  public expression?: string;
  public comparator?: string;
  public subpropertyEnabled?: boolean;
  public subpropertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogCondition';
  }

  /**
   * Get property definitions for DialogCondition
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionType',
        tsPropertyName: 'conditionType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExpression',
        tsPropertyName: 'expression',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasComparator',
        tsPropertyName: 'comparator',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSubpropertyEnabled',
        tsPropertyName: 'subpropertyEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubpropertyName',
        tsPropertyName: 'subpropertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
