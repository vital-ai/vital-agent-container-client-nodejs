import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Channel
 */
export class Channel extends VITAL_Node {
  public anonymousChannel?: boolean;
  public orderInUI?: number;
  public channelTypeURI?: string;
  public lastActivityTime?: number;
  public agentInstanceDeploymentURI?: string;
  public botURI?: string;
  public childChannel?: boolean;
  public orientationInUI?: string;
  public channelOrgTypeURI?: string;
  public stateManager?: string;
  public textEntryHidden?: boolean;
  public haleyMessageTextHidden?: boolean;
  public displayInUI?: boolean;
  public systemChannel?: boolean;
  public defaultChannel?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Channel';
  }

  /**
   * Get property definitions for Channel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAnonymousChannel',
        tsPropertyName: 'anonymousChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOrderInUI',
        tsPropertyName: 'orderInUI',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelTypeURI',
        tsPropertyName: 'channelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastActivityTime',
        tsPropertyName: 'lastActivityTime',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentURI',
        tsPropertyName: 'agentInstanceDeploymentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBotURI',
        tsPropertyName: 'botURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isChildChannel',
        tsPropertyName: 'childChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOrientationInUI',
        tsPropertyName: 'orientationInUI',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasChannelOrgTypeURI',
        tsPropertyName: 'channelOrgTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStateManager',
        tsPropertyName: 'stateManager',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTextEntryHidden',
        tsPropertyName: 'textEntryHidden',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHaleyMessageTextHidden',
        tsPropertyName: 'haleyMessageTextHidden',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDisplayInUI',
        tsPropertyName: 'displayInUI',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSystemChannel',
        tsPropertyName: 'systemChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDefaultChannel',
        tsPropertyName: 'defaultChannel',
        type: 'boolean',
        required: false
      }
    ];
  }


}
