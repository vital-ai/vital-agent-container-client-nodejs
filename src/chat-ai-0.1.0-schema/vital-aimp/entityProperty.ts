import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EntityProperty
 */
export class EntityProperty extends VITAL_Node {
  public entityPropertyType?: string;
  public multivalueProperty?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EntityProperty';
  }

  /**
   * Get property definitions for EntityProperty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntityPropertyType',
        tsPropertyName: 'entityPropertyType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMultivalueProperty',
        tsPropertyName: 'multivalueProperty',
        type: 'boolean',
        required: false
      }
    ];
  }


}
