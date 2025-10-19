import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions
 */
export class HaleyDynamicAnswerOptions extends VITAL_Node {
  public dynamicAnswerOptionsRowRow?: string;
  public dynamicAnswerOptionsRow?: string;
  public dynamicAnswerOptionsGroup?: string;
  public dynamicAnswerOptionsAnswer?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions';
  }

  /**
   * Get property definitions for HaleyDynamicAnswerOptions
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRowRow',
        tsPropertyName: 'dynamicAnswerOptionsRowRow',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRow',
        tsPropertyName: 'dynamicAnswerOptionsRow',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsGroup',
        tsPropertyName: 'dynamicAnswerOptionsGroup',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsAnswer',
        tsPropertyName: 'dynamicAnswerOptionsAnswer',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
