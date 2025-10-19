import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRecommend
 */
export class DialogRecommend extends DialogAction {
  public statusPropertyName?: string;
  public errorMessagePropertyName?: string;
  public timeoutSeconds?: number;
  public graphObjectsLinked?: boolean;
  public propertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogRecommend';
  }

  /**
   * Get property definitions for DialogRecommend
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusPropertyName',
        tsPropertyName: 'statusPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName',
        tsPropertyName: 'errorMessagePropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds',
        tsPropertyName: 'timeoutSeconds',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked',
        tsPropertyName: 'graphObjectsLinked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
