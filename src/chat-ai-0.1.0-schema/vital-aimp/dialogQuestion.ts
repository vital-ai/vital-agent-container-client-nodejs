import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQuestion
 */
export class DialogQuestion extends DialogElement {
  public validationType?: string;
  public sent?: boolean;
  public factPropertyName?: string;
  public factClassName?: string;
  /** URI reference to one of: DialogSession, BaseProfile, VITAL_Fact, Session */
  public parentFactURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogQuestion';
  }

  /**
   * Get property definitions for DialogQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasValidationType',
        tsPropertyName: 'validationType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSent',
        tsPropertyName: 'sent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactPropertyName',
        tsPropertyName: 'factPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactClassName',
        tsPropertyName: 'factClassName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParentFactURI',
        tsPropertyName: 'parentFactURI',
        type: 'http://vital.ai/ontology/vital-aimp#DialogSession | http://vital.ai/ontology/vital-aimp#BaseProfile | http://vital.ai/ontology/vital#VITAL_Fact | http://vital.ai/ontology/vital-aimp#Session',
        required: false,
        format: 'uri'
      }
    ];
  }


}
