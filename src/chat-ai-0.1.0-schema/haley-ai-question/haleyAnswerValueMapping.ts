import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping
 */
export class HaleyAnswerValueMapping extends VITAL_Node {
  public destinationMappedAnswerTypeURI?: string;
  public haleyMappedRowTypeURI?: string;
  public sourceMappedAnswerTypeURI?: string;
  public haleyMappedRowURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping';
  }

  /**
   * Get property definitions for HaleyAnswerValueMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI',
        tsPropertyName: 'destinationMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowTypeURI',
        tsPropertyName: 'haleyMappedRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI',
        tsPropertyName: 'sourceMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowURI',
        tsPropertyName: 'haleyMappedRowURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
