import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CheckItem
 */
export class CheckItem extends VITAL_Node {
  public itemStatus?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CheckItem';
  }

  /**
   * Get property definitions for CheckItem
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasItemStatus',
        tsPropertyName: 'itemStatus',
        type: 'string',
        required: false
      }
    ];
  }


}
