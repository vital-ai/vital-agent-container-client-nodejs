import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessagePayloadDef
 */
export class AIMPMessagePayloadDef extends VITAL_Node {
  public haleyParameterURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPMessagePayloadDef';
  }

  /**
   * Get property definitions for AIMPMessagePayloadDef
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyParameterURI',
        tsPropertyName: 'haleyParameterURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
