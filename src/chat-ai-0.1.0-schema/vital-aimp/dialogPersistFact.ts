import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogPersistFact
 */
export class DialogPersistFact extends DialogAction {
  public propertyName?: string;
  public inputFactScope?: string;
  public currentProfile?: boolean;
  public inputPropertyName?: string;
  public persistFactOperationType?: string;
  public factScope?: string;
  public profileURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogPersistFact';
  }

  /**
   * Get property definitions for DialogPersistFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputFactScope',
        tsPropertyName: 'inputFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrentProfile',
        tsPropertyName: 'currentProfile',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputPropertyName',
        tsPropertyName: 'inputPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPersistFactOperationType',
        tsPropertyName: 'persistFactOperationType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProfileURI',
        tsPropertyName: 'profileURI',
        type: 'string',
        required: false
      }
    ];
  }


}
