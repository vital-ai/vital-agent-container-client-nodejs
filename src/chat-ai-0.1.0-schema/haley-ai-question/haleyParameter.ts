import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyParameter
 */
export class HaleyParameter extends VITAL_Node {
  public kGType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyParameter';
  }

  /**
   * Get property definitions for HaleyParameter
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGType',
        tsPropertyName: 'kGType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
