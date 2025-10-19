import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteraction
 */
export class HaleyInteraction extends VITAL_Node {
  public haleyInteractionTypeURI?: string;
  public complete?: boolean;
  public sessionID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteraction';
  }

  /**
   * Get property definitions for HaleyInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionTypeURI',
        tsPropertyName: 'haleyInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isComplete',
        tsPropertyName: 'complete',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
        type: 'string',
        required: false
      }
    ];
  }


}
