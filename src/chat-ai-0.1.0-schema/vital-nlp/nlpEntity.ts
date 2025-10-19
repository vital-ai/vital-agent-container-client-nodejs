import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpEntity
 */
export class NlpEntity extends VITAL_Node {
  public relevance?: number;
  public nlpEntityCategory?: string;
  public extractSource?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#NlpEntity';
  }

  /**
   * Get property definitions for NlpEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasRelevance',
        tsPropertyName: 'relevance',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNlpEntityCategory',
        tsPropertyName: 'nlpEntityCategory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExtractSource',
        tsPropertyName: 'extractSource',
        type: 'string',
        required: false
      }
    ];
  }


}
