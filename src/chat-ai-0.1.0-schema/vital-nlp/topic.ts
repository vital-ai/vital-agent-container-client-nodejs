import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Topic
 */
export class Topic extends VITAL_Node {
  public topicScore?: number;
  public classifierName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Topic';
  }

  /**
   * Get property definitions for Topic
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTopicScore',
        tsPropertyName: 'topicScore',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasClassifierName',
        tsPropertyName: 'classifierName',
        type: 'string',
        required: false
      }
    ];
  }


}
