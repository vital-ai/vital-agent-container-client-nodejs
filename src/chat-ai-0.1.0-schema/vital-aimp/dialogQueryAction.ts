import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQueryAction
 */
export class DialogQueryAction extends DialogAction {
  public statusPropertyName?: string;
  public errorMessagePropertyName?: string;
  public queryType?: string;
  public destinationFactName?: string;
  public propertyName?: string;
  public criteriaType?: string;
  public relationshipFactName?: string;
  public relationshipFactScope?: string;
  public destinationFactScope?: string;
  public sourceFactScope?: string;
  public timeoutSeconds?: number;
  public graphObjectsLinked?: boolean;
  public targetService?: string;
  public sourceFactName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogQueryAction';
  }

  /**
   * Get property definitions for DialogQueryAction
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQueryType',
        tsPropertyName: 'queryType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationFactName',
        tsPropertyName: 'destinationFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCriteriaType',
        tsPropertyName: 'criteriaType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRelationshipFactName',
        tsPropertyName: 'relationshipFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRelationshipFactScope',
        tsPropertyName: 'relationshipFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationFactScope',
        tsPropertyName: 'destinationFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceFactScope',
        tsPropertyName: 'sourceFactScope',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetService',
        tsPropertyName: 'targetService',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceFactName',
        tsPropertyName: 'sourceFactName',
        type: 'string',
        required: false
      }
    ];
  }


}
