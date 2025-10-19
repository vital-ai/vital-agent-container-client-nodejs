import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProgressItem
 */
export class ProgressItem extends VITAL_Node {
  public itemStatus?: string;
  public shortDescription?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProgressItem';
  }

  /**
   * Get property definitions for ProgressItem
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasItemStatus',
        tsPropertyName: 'itemStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
