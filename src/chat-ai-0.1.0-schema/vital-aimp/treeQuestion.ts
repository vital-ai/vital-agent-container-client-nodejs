import { Question } from './question';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TreeQuestion
 */
export class TreeQuestion extends Question {
  public treeJson?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TreeQuestion';
  }

  /**
   * Get property definitions for TreeQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTreeJson',
        tsPropertyName: 'treeJson',
        type: 'string',
        required: false
      }
    ];
  }


}
