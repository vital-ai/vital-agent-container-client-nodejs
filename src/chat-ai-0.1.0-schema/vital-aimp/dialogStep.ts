import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogStep
 */
export class DialogStep extends DialogAction {
  public commentedOut?: boolean;
  public comments?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogStep';
  }

  /**
   * Get property definitions for DialogStep
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCommentedOut',
        tsPropertyName: 'commentedOut',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasComments',
        tsPropertyName: 'comments',
        type: 'string',
        required: false
      }
    ];
  }


}
