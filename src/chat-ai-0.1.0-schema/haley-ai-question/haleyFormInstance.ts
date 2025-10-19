import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyFormInstance
 */
export class HaleyFormInstance extends VITAL_Node {
  public haleyForm?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyFormInstance';
  }

  /**
   * Get property definitions for HaleyFormInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyForm',
        tsPropertyName: 'haleyForm',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
