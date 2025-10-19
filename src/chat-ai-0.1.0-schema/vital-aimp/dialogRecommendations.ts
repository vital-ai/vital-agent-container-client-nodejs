import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRecommendations
 */
export class DialogRecommendations extends DialogElement {
  public solutionFactURI?: string;
  public createSolutionFact?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogRecommendations';
  }

  /**
   * Get property definitions for DialogRecommendations
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSolutionFactURI',
        tsPropertyName: 'solutionFactURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCreateSolutionFact',
        tsPropertyName: 'createSolutionFact',
        type: 'boolean',
        required: false
      }
    ];
  }


}
