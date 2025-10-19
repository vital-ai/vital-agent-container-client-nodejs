import { DialogPart } from './dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRow
 */
export class DialogRow extends DialogPart {
  public commentedOut?: boolean;
  public comments?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogRow';
  }

  /**
   * Get property definitions for DialogRow
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
