import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyIntentInstance
 */
export class HaleyIntentInstance extends VITAL_Node {
  public haleyIntentURI?: string;
  public haleyIntentSourceText?: string;
  public haleyIntentScore?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyIntentInstance';
  }

  /**
   * Get property definitions for HaleyIntentInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentURI',
        tsPropertyName: 'haleyIntentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSourceText',
        tsPropertyName: 'haleyIntentSourceText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentScore',
        tsPropertyName: 'haleyIntentScore',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
